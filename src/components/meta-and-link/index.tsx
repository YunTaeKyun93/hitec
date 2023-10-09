const MetaAndLink = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@600&display=swap" rel="stylesheet" />
      {/* Todo: Production build before at remove noindex, nofollow */}
      <meta name="robots" content="noindex,nofollow" />
    </>
  );
};

export default MetaAndLink;
