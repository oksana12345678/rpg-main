type ClassMapping = {
  container: string;
  titleClass?: string;
};

const CLASS_MAPPINGS: Record<string, ClassMapping> = {
  'Воїн фронтенду': { container: 'shadow-shadow_front_end', titleClass: 'text-front_end' },
  'Винахідник UX/UI': { container: 'shadow-shadow_ux_ui_design', titleClass: 'text-ux_ui_design' },
  default: { container: 'shadow-shadow_front_end', titleClass: 'text-front_end' },
};

export const getClassMapping = (userClass?: string): ClassMapping => {
  return CLASS_MAPPINGS[userClass ?? 'default'] || CLASS_MAPPINGS.default;
};
