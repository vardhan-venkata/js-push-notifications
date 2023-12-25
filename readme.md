## Notifications API using JS

## Description

- This is a simple and powerful API, using which we can show/create a notification. It is used to configure and display desktop notifications.

## Explanation

- Notificaion() - It creates a new instance of the notification

## Steps to implement

1. First we can request permission from the user.

- We can get the permission by using requestPermission()
- It will give you a promise
- 1.  We have "granted" -> which means user granted the notification access
- 2.  We have "denied" -> which means user revoked the access
- 3.  We have "default" -> which means user haven't done any action.
  <hr/>

2. We can now based on the user action, we can take particular steps to perform

- 1.  if "granted" we can show the notification
- 2.  If "denied" we can request again
- 3. If "default" we can request again

3. Now we can create the notification

- new Notification("Hi, there folks!")

### Instance methods

- 1. body : in this we can give the content that can be shown in the notification body
- 2. data : we can provide data as well, if for any purpose
- 3. icon : to show the icon for the notification
- 4. tag : it is kinda of unique identifier for the notification
- - This will be helpful to prevent the spamming of the same notification.

### Events for the notification

- 1. "click" : when clicked on the notification.
- 2. "error" : when any error from the notification.
- 3. "close" : when notification is closed.
- 4. "show" : To show the notification.

### For example, please visit the index.js,

- There we have taken the element using various selectors,and added the notification.
