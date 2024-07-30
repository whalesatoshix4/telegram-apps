import { decorateWithSupports, WithSupports } from '@/components/decorateWithSupports.js';
import { request } from '@/bridge/request.js';
import { postEvent } from '@/globals/globals.js';
import { ERR_INVALID_HOSTNAME, ERR_INVALID_SLUG, ERR_INVOICE_OPENED } from '@/errors/errors.js';
import { createError } from '@/errors/createError.js';
import { computed } from '@/signals/computed/computed.js';
import type { InvoiceStatus } from '@/bridge/events/types.js';

import { isOpened as _isOpened } from './invoice.private.js';

/*
 * @see API: https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/components/invoice
 * todo usage
 */

export type OpenFn = WithSupports<{
  /**
   * Opens an invoice using its slug.
   * @param slug - invoice slug.
   * @throws {SDKError} ERR_INVOICE_OPENED
   * @throws {SDKError} ERR_INVALID_HOSTNAME
   * @throws {SDKError} ERR_INVALID_SLUG
   * @see ERR_INVOICE_OPENED
   * @see ERR_INVALID_HOSTNAME
   * @see ERR_INVALID_SLUG
   */
  (slug: string): Promise<InvoiceStatus>;
  /**
   * Opens an invoice using its url. It expects to pass a link in full format, with hostname "t.me".
   * @param url - invoice URL.
   * @param type - value type.
   * @throws {SDKError} ERR_INVOICE_OPENED
   * @throws {SDKError} ERR_INVALID_HOSTNAME
   * @throws {SDKError} ERR_INVALID_SLUG
   * @see ERR_INVOICE_OPENED
   * @see ERR_INVALID_HOSTNAME
   * @see ERR_INVALID_SLUG
   */
  (url: string, type: 'url'): Promise<InvoiceStatus>;
}>;

const MINI_APPS_METHOD = 'web_app_open_invoice';

/**
 * True if the invoice is currently opened.
 */
export const isOpened = computed(_isOpened);

export const open: OpenFn = decorateWithSupports(
  async (urlOrSlug, type?) => {
    if (_isOpened()) {
      throw createError(ERR_INVOICE_OPENED);
    }

    let slug: string;
    if (!type) {
      slug = urlOrSlug;
    } else {
      const { hostname, pathname } = new URL(urlOrSlug, window.location.href);
      if (hostname !== 't.me') {
        throw createError(ERR_INVALID_HOSTNAME);
      }

      // Valid examples:
      // "/invoice/my-slug"
      // "/$my-slug"
      const match = pathname.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/);
      if (!match) {
        throw createError(ERR_INVALID_SLUG);
      }
      [, , slug] = match;
    }

    _isOpened.set(true);

    try {
      const result = await request({
        method: MINI_APPS_METHOD,
        event: 'invoice_closed',
        params: { slug },
        postEvent: postEvent(),
        capture(data) {
          return slug === data.slug;
        },
      });

      return result.status;
    } finally {
      _isOpened.set(false);
    }
  },
  MINI_APPS_METHOD,
);