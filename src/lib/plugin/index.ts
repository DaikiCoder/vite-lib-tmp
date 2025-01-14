import plugin from 'tailwindcss/plugin';

export interface IDaikiUIConfig {
  colors?: IDaikiUIColors;
}

export interface IDaikiUIColors {
  primaryColor?: string;
  secondaryColor?: string;
}

const baseColors = {
  primaryColor: '#26A6CA',
  secondaryColor: '#0BBE92',
};

export function daikiui(daikiConfig?: IDaikiUIConfig) {
  return plugin(({ addBase }) => {
    const primaryColor = daikiConfig?.colors?.primaryColor || baseColors.primaryColor;
    const secondaryColor = daikiConfig?.colors?.secondaryColor || baseColors.secondaryColor;

    assertValidHex(primaryColor);
    assertValidHex(secondaryColor);

    addBase({
      ':root': {
        '--dui-primary-color': hexToRgb(primaryColor),
        '--dui-secondary-color': hexToRgb(secondaryColor),
      },
    });
  });
}

function isValidHex(color: string) {
  const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})?$/;

  return hexRegex.test(color);
}

function assertValidHex(color: string) {
  if (!isValidHex(color)) {
    throw new Error(`DaikiUI - Invalid HEX color: ${color}`);
  }
}

function hexToRgb(hex: string): string {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((x) => x + x)
      .join('');
  }
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}
