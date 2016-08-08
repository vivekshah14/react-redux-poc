/*
 * action types
 */
export const ADD_APPCARD = 'ADD_APPCARD'
/*
 * action creators
 */

export function addAppCard(appCardData) {
  return {
    type: ADD_APPCARD,
    appCardData
  }
}
