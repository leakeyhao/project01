import { ref } from "vue";

const nowTime = ref("00:00:00");

const getNowTime = () => {
    const time: Date = new Date();
    const hour: string = time.getHours().toString().padStart(2, "0"),
        minutes: string = time.getMinutes().toString().padStart(2, "0"),
        second: string = time.getSeconds().toString().padStart(2, "0");
    nowTime.value = `${hour}:${minutes}:${second}`;
    setTimeout(getNowTime, 1000);
};

export { nowTime, getNowTime }