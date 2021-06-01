export function getPresets(state) {
  return state?.presetReducer || [];
}
export function getReusableVideos(state) {
  return state?.videosReducer || [];
}
export function getReusableVideo(state, id) {
  return state?.videosReducer?.videos?.find((video) => video?.id === id) || [];
}
export function getDefaultPreset(state) {
  let preset = (state?.presetReducer || []).find((preset) => {
    return preset.id && preset.id === prestoPlayer?.defaultPreset;
  });
  if (!preset) {
    preset = (state?.presetReducer || []).find((preset) => {
      return preset.slug == "default";
    });
  }
  if (!preset) {
    preset = (state?.presetReducer || [])[0];
  }

  return preset;
}
export function presetsLoading(state) {
  return !!state?.presetLoadingReducer;
}
export function branding(state) {
  return state?.brandingReducer;
}
export function youtube(state) {
  return state?.youtubeReducer;
}
export function proModal(state) {
  return state?.proModalReducer;
}
