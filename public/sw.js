self.addEventListener('push', function (event) {
  if (event.data) {
    const data = JSON.parse(event.data.text())
    const options = {
      body: data.body,
      icon: data.icon || '/favicon-96x96.png',
      badge: '/favicon-96x96.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2',
      },
    }
    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})
 