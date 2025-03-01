export type GlareProps = {
  /**
   * Boolean to enable/disable glare effect.
   */
  glareEnable?: boolean;
  /**
   * The maximum glare opacity (0.5 = 50%, 1 = 100%, etc.). Range: 0 - 1
   */
  glareMaxOpacity?: number;
  /**
   * Set color of glare effect.
   */
  glareColor?: string;
  /**
   * Set position of glare effect.
   */
  glarePosition?: GlarePosition;
  /**
   * Reverse the glare direction.
   */
  glareReverse?: boolean;
};

export type GlarePosition = 'top' | 'right' | 'bottom' | 'left' | 'all';

export type GlareSize = {
  width: number;
  height: number;
};
