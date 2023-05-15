import * as Notifications from 'expo-notifications';

export const scheduleNotification = async (timeInterval: number) => {
  // Cancel all existing notifications
  await Notifications.cancelAllScheduledNotificationsAsync();

  // Schedule a new notification
  await Notifications.scheduleNotificationAsync({
    content: {
      title: '时间到了！',
      body: '请记录你在过去的时间里做了什么。',
      data: { type: 'interval' },
    },
    trigger: {
      seconds: timeInterval * 60,
      repeats: true,
    },
  });
};

export const handleNotificationResponse = async (
  response: Notifications.NotificationResponse
) => {
  if (response.notification.request.content.data.type === 'interval') {
    // Handle the notification response here
  }
};

export const registerForPushNotificationsAsync = async () => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }
};
