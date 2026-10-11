const rectangle = {
    width: 100,
    height: 50,
    color: "red",
};
for (const key of Object.keys(rectangle)) {
    console.log(key, rectangle[key]);
}
for (const [key, value] of Object.entries(rectangle)) {
    console.log(key, value);
}
for (const key in rectangle) {
    console.log(key, rectangle[key]);
}
