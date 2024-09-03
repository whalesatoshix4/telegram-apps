import { computed, type Computed, signal } from '@telegram-apps/signals';
import type { InitData } from '@telegram-apps/bridge';

/* USUAL */

/**
 * Complete component state.
 */
export const state = signal<InitData | undefined>(undefined);

/* COMPUTED */

function createStateComputed<K extends keyof InitData>(key: K): Computed<InitData[K] | undefined> {
  return computed(() => {
    const s = state();
    return s ? s[key] : undefined;
  });
}

/**
 * @see InitData.authDate
 */
export const authDate = createStateComputed('authDate');

/**
 * @see InitData.canSendAfter
 */
export const canSendAfter = createStateComputed('canSendAfter');

/**
 * Date after which it is allowed to call
 * the [answerWebAppQuery](https://core.telegram.org/bots/api#answerwebappquery) method.
 */
export const canSendAfterDate = computed(() => {
  const authDateValue = authDate();
  const canSendAfterValue = canSendAfter();

  return canSendAfterValue && authDateValue
    ? new Date(authDateValue.getTime() + canSendAfterValue * 1000)
    : undefined
});

/**
 * @see InitData.chat
 */
export const chat = createStateComputed('chat');

/**
 * @see InitData.chatType
 */
export const chatType = createStateComputed('chatType');

/**
 * @see InitData.chatInstance
 */
export const chatInstance = createStateComputed('chatInstance');

/**
 * @see InitData.hash
 */
export const hash = createStateComputed('hash');

/**
 * @see InitData.queryId
 */
export const queryId = createStateComputed('queryId');

/**
 * Raw representation of init data.
 */
export const raw = signal<string | undefined>();

/**
 * @see InitData.receiver
 */
export const receiver = createStateComputed('receiver');

/**
 * @see InitData.startParam
 */
export const startParam = createStateComputed('startParam');

/**
 * @see InitData.user
 */
export const user = createStateComputed('user');