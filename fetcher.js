const request = require('request');
const fs = require('fs');


const fetch = function(URL, localPath) {
  
  request(URL, (error, body) => {
    if (error) {
      console.log("Resource download has failed: ", error);
      return;
    }
    fs.writeFile(localPath, body, (error) => {
      if (error) {
        console.log("File not written: ", error);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
      }
    });

  });
  
};

fetch('http://www.example.edu/', './index.html');