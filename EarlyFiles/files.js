const fs = require("fs");

// reading file
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
// console.log("last line of code");

// writing file
fs.writeFile("./docs/blog1.txt", "this is my first blog", () => {
  console.log("file was written");
});

fs.writeFile("./docs/blog2.txt", "hello again", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("file was written");
});

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("directory was created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("directory was deleted");
  });
}

// deleting file
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file was deleted");
  });
} else {
}
