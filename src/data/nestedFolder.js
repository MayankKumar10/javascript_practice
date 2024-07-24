export const nestedFolder = {
  name: "root",
  isFolder: true,
  folder: [
    {
      name: "public",
      isFolder: true,
      folder: [
        {
          name: "public 1",
          isFolder: false,
        },
        {
          name: "public 2",
          isFolder: false,
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      folder: [
        {
          name: "components",
          isFolder: false,
        },
        {
          name: "pages",
          isFolder: false,
        }
      ]
    }
  ]
}