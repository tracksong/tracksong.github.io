const fs = require("fs");
const path = require("path");

/**
 * add ads.txt
 * https://support.google.com/adsense/answer/7532444
 * @param {*} ctx
 * @param {string} adClient
 */
module.exports = (ctx, adClient) => {
  const filePath = path.resolve(ctx.outDir, "ads.txt");
  const pubId = adClient.startsWith("ca-") ? adClient.slice(3) : adClient;
  const adsTxtContent = `google.com, pub-7657467328344316, DIRECT, f08c47fec0942fa0`;
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, adsTxtContent);
  } else if (!fs.readFileSync(filePath, "utf-8").includes(adsTxtContent)) {
    fs.appendFileSync(filePath, "\n" + adsTxtContent);
  }
};
