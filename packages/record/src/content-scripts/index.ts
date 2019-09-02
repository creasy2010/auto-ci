import EventRecorder from './EventRecorder'
//@ts-ignore
window.eventRecorder = new EventRecorder()
//@ts-ignore
window.eventRecorder.boot()
console.log('启动 eventRecorder');
