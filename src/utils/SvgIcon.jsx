export const SvgIcon = ({ svg }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: svg,
    }}
  />
);