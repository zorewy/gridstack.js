/**
 * dd-manager.ts 5.0.0-dev
 * Copyright (c) 2021 Alain Dumesny - see GridStack root license
 */

import { DDDraggable } from './dd-draggable';
import { DDDroppable } from './dd-droppable';

export class DDManager {
  static dragElement: DDDraggable;
  static dropElement: DDDroppable;
}
