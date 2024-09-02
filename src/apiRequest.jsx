const apiRequest = async (url, optionsBOJ, setError) => {
  try {
    const response = await fetch(url, optionsBOJ);

    if (!response.ok) throw Error(`reload the ${response.status}`);
  } catch (error) {
    console.log(error.message);
    setError(error.message);
  }
};
export default apiRequest;
