<template>
  <div class="countdown">
    <div class="bg-indigo-600">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex flex-row items-center justify-between">
          <div
            class="flex items-center justify-center"
            v-if="status == 'iftar'"
          >
            <p class="text-4xl font-bold text-white">Till Iftar</p>
          </div>
          <div class="flex items-center justify-center" v-if="status == 'sehr'">
            <p class="text-4xl font-bold text-white">Till Sehr</p>
          </div>
          <div
            class="flex flex-col items-center justify-center p-3 rounded-lg bg-indigo-700"
          >
            <div
              class="py-2 px-4 rounded-lg bg-indigo-800 flex items-center justify-center"
            >
              <p class="font-bold text-xl text-white">Sehr</p>
            </div>
            <p class="text-center font-medium text-white truncate">
              <span class="text-2xl font-bold tracking-wide">
                {{ getRamadanToday.sehr ? getRamadanToday.sehr : "00:00:00" }}
              </span>
            </p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <div
              class="py-2 px-4 rounded-lg bg-indigo-800 flex items-center justify-center"
            >
              <p class="font-bold text-xl text-white">Hours</p>
            </div>
            <p class="text-center font-medium text-white truncate">
              <span class="text-2xl font-bold tracking-wide">
                {{ timeForCountDown.hours ? timeForCountDown.hours : 0 }}
              </span>
            </p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <div
              class="py-2 px-4 rounded-lg bg-indigo-800 flex items-center justify-center"
            >
              <p class="font-bold text-xl text-white">Minutes</p>
            </div>
            <p class="text-center font-medium text-white truncate">
              <span class="text-2xl font-bold tracking-wide">
                {{ timeForCountDown.minutes ? timeForCountDown.minutes : 0 }}
              </span>
            </p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <div
              class="py-2 px-4 rounded-lg bg-indigo-800 flex items-center justify-center"
            >
              <p class="font-bold text-xl text-white">Seconds</p>
            </div>
            <p class="text-center font-medium text-white truncate">
              <span class="text-2xl font-bold tracking-wide">
                {{ timeForCountDown.seconds ? timeForCountDown.seconds : 0 }}
              </span>
            </p>
          </div>
          <div class="flex flex-col items-center justify-center">
            <p class="text-xl font-bold tracking-wide text-white">
              {{ today }}
              <br />
              {{ getRamadanToday.day }}<super>th</super> Ramadan
              <br />
              <span v-if="getRamadanToday.special">
                Maybe Laila-tul-Qadar !!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from "moment";

  export default {
    name: "countdown",
    data() {
      return {
        today: new Date().toDateString(),
        calender: [
          {
            day: 1,
            date: "14-04-2021",
            sehr: "04:51 AM",
            iftar: "6:55 PM",
          },
          {
            day: 2,
            date: "15-04-2021",
            sehr: "04:50 AM",
            iftar: "6:55 PM",
          },
          {
            day: 3,
            date: "16-04-2021",
            sehr: "04:49 AM",
            iftar: "6:56 PM",
          },
          {
            day: 4,
            date: "17-04-2021",
            sehr: "04:48 AM",
            iftar: "6:56 PM",
          },
          {
            day: 5,
            date: "18-04-2021",
            sehr: "04:47 AM",
            iftar: "6:57 PM",
          },
          {
            day: 6,
            date: "19-04-2021",
            sehr: "04:46 AM",
            iftar: "6:57 PM",
          },
          {
            day: 7,
            date: "20-04-2021",
            sehr: "04:45 AM",
            iftar: "6:57 PM",
          },
          {
            day: 8,
            date: "21-04-2021",
            sehr: "04:44 AM",
            iftar: "6:58 PM",
          },
          {
            day: 9,
            date: "22-04-2021",
            sehr: "04:43 AM",
            iftar: "6:58 PM",
          },
          {
            day: 10,
            date: "23-04-2021",
            sehr: "04:42 AM",
            iftar: "6:59 PM",
          },
          {
            day: 11,
            date: "24-04-2021",
            sehr: "04:41 AM",
            iftar: "6:59 PM",
          },
          {
            day: 12,
            date: "25-04-2021",
            sehr: "04:40 AM",
            iftar: "7:00 PM",
          },
          {
            day: 13,
            date: "26-04-2021",
            sehr: "04:39 AM",
            iftar: "7:00 PM",
          },
          {
            day: 14,
            date: "27-04-2021",
            sehr: "04:38 AM",
            iftar: "7:01 PM",
          },
          {
            day: 15,
            date: "28-04-2021",
            sehr: "04:37 AM",
            iftar: "7:01 PM",
          },
          {
            day: 16,
            date: "29-04-2021",
            sehr: "04:36 AM",
            iftar: "7:02 PM",
          },
          {
            day: 17,
            date: "30-04-2021",
            sehr: "04:35 AM",
            iftar: "7:02 PM",
          },
          {
            day: 18,
            date: "01-05-2021",
            sehr: "04:34 AM",
            iftar: "7:03 PM",
          },
          {
            day: 19,
            date: "02-05-2021",
            sehr: "04:33 AM",
            iftar: "7:03 PM",
          },
          {
            day: 20,
            date: "03-05-2021",
            sehr: "04:32 AM",
            iftar: "7:04 PM",
          },
          {
            day: 21,
            date: "04-05-2021",
            sehr: "04:31 AM",
            iftar: "7:04 PM",
            special: true,
          },
          {
            day: 22,
            date: "05-05-2021",
            sehr: "04:30 AM",
            iftar: "7:05 PM",
          },
          {
            day: 23,
            date: "06-05-2021",
            sehr: "04:29 AM",
            iftar: "7:05 PM",
            special: true,
          },
          {
            day: 24,
            date: "07-05-2021",
            sehr: "04:28 AM",
            iftar: "7:06 PM",
          },
          {
            day: 25,
            date: "08-05-2021",
            sehr: "04:28 AM",
            iftar: "7:06 PM",
            special: true,
          },
          {
            day: 26,
            date: "09-05-2021",
            sehr: "04:27 AM",
            iftar: "7:07 PM",
          },
          {
            day: 27,
            date: "10-05-2021",
            sehr: "04:26 AM",
            iftar: "7:07 PM",
            special: true,
          },
          {
            day: 28,
            date: "11-05-2021",
            sehr: "04:25 AM",
            iftar: "7:08 PM",
          },
          {
            day: 29,
            date: "12-05-2021",
            sehr: "04:24 AM",
            iftar: "7:08 PM",
            special: true,
          },
          {
            day: 30,
            date: "13-05-2021",
            sehr: "04:24 AM",
            iftar: "7:09 PM",
          },
        ],
        status: "sehr",
        timeForCountDown: {
          days: null,
          hours: null,
          minutes: null,
          seconds: null,
        },
      };
    },
    methods: {
      calculateCountDown() {
        // let stat = this.status;
        let today = moment().format("DD-MM-YYYY");

        let filtered = this.calender.filter((x) => x.date == today);

        if (filtered) {
          let now = filtered[0];
          let iftartime = now.iftar;
          let sehrtime = now.sehr;

          let getDifference = checkIftarOrSehr(sehrtime);

          if (getDifference) {
            let makeArray = getDifference.toString().split("");
            if (makeArray[0] == "-") {
              this.status = "sehr";
              // Sehri Calculations
              let sehriDifference = checkIftarOrSehr(sehrtime);
              let resultForSehri = calculateFromDifference(sehriDifference);
              this.timeForCountDown = resultForSehri;
            } else {
              this.status = "iftar";
              // Iftar Calculations
              let iftarDifference = checkIftarOrSehr(iftartime);
              let resultForIftar = calculateFromDifference(iftarDifference);
              this.timeForCountDown = resultForIftar;
            }
          }

          // Sehri Timings Calculations
          let result = calculateFromDifference(getDifference);
          this.timeForCountDown = result;

          function checkIftarOrSehr(time) {
            let sehrsplittime = time.split(":");
            let sehrsplittime2 = sehrsplittime[1].split(" ");

            // Calculation
            let sehrhours = sehrsplittime[0];
            let sehrminutes = sehrsplittime2[0];

            let dummy = new Date().toString();

            let splitstring = dummy.split(" ");

            let HourInNumber = Number(sehrhours);

            splitstring[4] = `${HourInNumber}:${sehrminutes}:00`;
            let joinedstring = splitstring.join(" ");

            let finaltime = new Date(joinedstring).getTime();

            let nowtime = new Date().getTime();

            // object.Differential
            const diff = Math.floor(finaltime - nowtime);

            return diff;
          }

          function calculateFromDifference(diff) {
            // Formulas
            const calculatesecond = 1000;
            const calculateminute = calculatesecond * 60;
            const calculatehour = calculateminute * 60;
            const calculateday = calculatehour * 24;

            // Calculations Logic
            const textday = Math.floor(diff / calculateday);
            const texthour = Math.floor((diff % calculateday) / calculatehour);
            const textminutes = Math.floor(
              (diff % calculatehour) / calculateminute
            );
            const textseconds = Math.floor(
              (diff % calculateminute) / calculatesecond
            );

            let totaltime = {
              days: Math.abs(textday),
              hours: Math.abs(texthour),
              minutes: Math.abs(textminutes),
              seconds: Math.abs(textseconds),
            };

            return totaltime;
          }

          console.log(this.timeForCountDown);

          // let result = calculatefunction(sehrtime);

          // function calculatefunction(time) {
          //   if (time) {
          //     let splittime = time.split(":");
          //     let splittime2 = splittime[1].split(" ");
          //     if (splittime && splittime2) {
          //       let hours = splittime[0];
          //       let minutes = splittime2[0];

          //       let dummy = new Date().toString();

          //       let splitstring = dummy.split(" ");

          //       let HourInNumber = Number(hours) + 12;

          //       splitstring[4] = `${HourInNumber}:${minutes}:00`;

          //       let joinedstring = splitstring.join(" ");

          //       let finaltime = new Date(joinedstring).getTime();

          //       let nowtime = new Date().getTime();

          //       // object.Differential
          //       const diff = Math.floor(finaltime - nowtime);

          //       // Calculation the difference of both times

          //       // Formulas
          //       const calculatesecond = 1000;
          //       const calculateminute = calculatesecond * 60;
          //       const calculatehour = calculateminute * 60;
          //       const calculateday = calculatehour * 24;

          //       // Calculations Logic
          //       const textday = Math.floor(diff / calculateday);
          //       const texthour = Math.floor(
          //         (diff % calculateday) / calculatehour
          //       );
          //       const textminutes = Math.floor(
          //         (diff % calculatehour) / calculateminute
          //       );
          //       const textseconds = Math.floor(
          //         (diff % calculateminute) / calculatesecond
          //       );

          //       let totaltime = {
          //         days: Math.abs(textday),
          //         hours: Math.abs(texthour),
          //         minutes: Math.abs(textminutes),
          //         seconds: Math.abs(textseconds),
          //       };

          //       return totaltime;
          //     }
          //   }
          // }

          // this.timeForCountDown = result;
          // console.log(result);
          // return result;
        }
      },
    },
    computed: {
      getRamadanToday() {
        let today = moment().format("DD-MM-YYYY");

        let filtered = this.calender.filter((x) => x.date == today);

        if (filtered) {
          return filtered[0];
        }
      },
      counting() {
        this.calculateCountDown();
      },
    },
    mounted() {
      this.getRamadanToday;
      this.counting;
    },
  };
</script>

<style></style>
