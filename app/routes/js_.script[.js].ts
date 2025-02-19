export const loader = async () => {
  // Only for localhost development/testing of Plausible
  // const PLAUSIBLE_SCRIPT_URL = 'https://plausible.io/js/script.local.js';
  const PLAUSIBLE_SCRIPT_URL = 'https://plausible.io/js/script.js';

  const plausibleScriptData = await fetch(PLAUSIBLE_SCRIPT_URL, {
    duplex: 'half',
  });
  const script = await plausibleScriptData.text();
  const { status, headers } = plausibleScriptData;

  const headersObj = Object.fromEntries(headers.entries());
  delete headersObj['content-encoding'];

  return new Response(script, {
    status,
    headers: headersObj,
  });
};
