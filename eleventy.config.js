export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: { input: "src", output: "_site" },
    // Set PATH_PREFIX when the site lives in a subfolder, for example /my-site/.
    pathPrefix: process.env.PATH_PREFIX || "/",
  };
}
