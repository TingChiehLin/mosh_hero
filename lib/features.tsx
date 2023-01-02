import "server-only";

export const getFeatureData = async () => {
  const url = "https://moshhero.free.beeceptor.com/my/api/options";
  try {
    const res = await fetch(url);
    return res.json();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch data");
  }
};
