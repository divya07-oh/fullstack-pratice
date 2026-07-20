function normalizeUnits(manifest) {
  const normalizedManifest = { ...manifest };

  if (manifest.unit === "lb") {
    normalizedManifest.weight = manifest.weight * 0.45;
    normalizedManifest.unit = "kg";
  }

  return normalizedManifest;
}

function validateManifest(manifest) {
  const errors = {};

  if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
    errors.containerId = manifest.containerId === undefined ? "Missing" : "Invalid";
  }

  if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination =
      manifest.destination === undefined ? "Missing" : "Invalid";
  }

  if (
    typeof manifest.weight !== "number" ||
    !Number.isFinite(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = manifest.weight === undefined ? "Missing" : "Invalid";
  }

  if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = manifest.unit === undefined ? "Missing" : "Invalid";
  }

  if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = manifest.hazmat === undefined ? "Missing" : "Invalid";
  }

  return errors;
}

