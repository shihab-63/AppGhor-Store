// localStorage
export const getInstalledData = () => {
  try {
    const data = localStorage.getItem("installed");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addToInstalled = (app) => {
  const loadData = getInstalledData();

  try {
    // Duplicate Check
    const isDuplicate = loadData.some((p) => p.id === app.id);
    if (isDuplicate) return false;
    const updatedInstalled = [...loadData, app];
    localStorage.setItem("installed", JSON.stringify(updatedInstalled));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// Removed
export const removedApp = (id) => {
  const getApp = getInstalledData();
  try {
    const removed = getApp.filter((app) => app.id !== id);
    localStorage.setItem("installed", JSON.stringify(removed));
  } catch (error) {
    console.error(error);
  }
};
