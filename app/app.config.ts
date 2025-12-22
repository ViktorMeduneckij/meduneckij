export default defineAppConfig({
  ui: {
    main: {
      base: "w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-4",
    },
    button: {
      base: "w-full justify-center md:w-auto lg:justify-start ",
      defaultVariants: {
        color: "neutral",
      },
    },
  },
} as any);
