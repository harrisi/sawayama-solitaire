// Cards
export const SM = document.documentElement.clientWidth < 768;
export const CARD_W = 100;
export const CARD_H = Math.round(CARD_W * 1.38095238);
export const CARD_OFFSET_VERTICAL = CARD_H / 3.5;
export const CARD_OFFSET_HORIZONTAL = SM ? 25 : 21;
export const STACK_GAP = SM ? 2 : 18;
export const ACE_TRAY_W = CARD_W + STACK_GAP * 2;
export const DECK_POS = { x: STACK_GAP, y: SM ? CARD_H * 1.25 : 35 };
export const CARD_ANIM_SPEED_MS = 50;
export const BOARD_Y = CARD_H + STACK_GAP + STACK_GAP / 2 + CARD_H * 1.5 + STACK_GAP;

export enum Suit {
  Clubs = 'clubs',
  Diamonds = 'diamonds',
  Hearts = 'hearts',
  Spades = 'spades'
}

export enum Rank {
  Ace = 'a',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'j',
  Queen = 'q',
  King = 'k'
}

// View
export const VIEW_W = (CARD_W + STACK_GAP) * 7 + STACK_GAP;
export const VIEW_H = (STACK_GAP + CARD_H) * 10 + STACK_GAP;

// Colors
export const COLOR_BG = '#505459';

// Events
export enum GameEvent {
  CARD_CLICK = 'CARD_CLICK',
  CARD_DOWN = 'CARD_DOWN',
  CARD_UP = 'CARD_UP'
}

// Misc
export const BANK_STACK_ID = 7;
export const DECK_CELL_ID = 8;
