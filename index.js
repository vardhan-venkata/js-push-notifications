buttonElement = document.querySelector("button");
buttonElementByName = document.getElementsByName("click-me-name");
buttonElementByClassName = document.getElementsByClassName("click-me-class");

// console.log("buttonElement", buttonElement);
// console.log("buttonElementByname", buttonElementByName);
console.log("buttonElementByClassname", buttonElementByClassName);
buttonElement.addEventListener("click", () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("coming in the granted");
      const notification = new Notification(
        "Hi, Thanks for granting permission",
        {
          body: "This is notification body",
          data: { name: "Success Notification" },
          //   icon : here we can display the icon
          tag: "Success Notification",
        }
      );
      //This is when the notification closes it will display in the console
      notification.addEventListener("close", (e) => {
        console.log("e");
      });
    } else if (permission === "denied") {
      new Notification("Hi,Please provide permission", {
        body: "Please provide permission to watch the demo",
        data: { name: "permission denied notification" },
        tag: "Permission denied notification",
      });
    }
  });
});
buttonElementByName &&
  buttonElementByName[0].addEventListener("click", () => {
    Notification.requestPermission().then((permission) => {
      alert(permission);
      if (permission === "granted") {
        notification = new Notification("Hi, Thanks for granting permission", {
          body: "This is notification body",
        });
      } else if (permission === "denied") {
        notification = new Notification("Hi,Please provide permission", {
          body: "Please provide permission to watch the demo",
        });
      }
    });
  });

buttonElementByClassName &&
  buttonElementByClassName[0].addEventListener("click", () => {
    Notification.requestPermission().then((permission) => {
      alert(permission);
      if (permission === "granted") {
        notification = new Notification("Hi, Thanks for granting permission", {
          body: "This is notification body",
        });
      } else if (permission === "denied") {
        notification = new Notification("Hi,Please provide permission", {
          body: "Please provide permission to watch the demo",
        });
      }
    });
  });

let notification;
let interval;
document.addEventListener("visibilitychange", () => {
  console.log("visisbility Changed");
  if (document.visibilityState === "hidden") {
    const leaveDate = new Date();
    interval = setInterval(() => {
      notification = new Notification("come back please", {
        body: `You have been gone for ${Math.round(
          (new Date() - leaveDate) / 1000
        )} seconds`,
        tag: "left notification",
      });
    }, 100);
  } else {
    console.log("coming in the else");
    if (notification) notification.close();
    if (interval) clearInterval(interval);
  }
});
