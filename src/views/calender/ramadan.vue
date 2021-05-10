<template>
  <div class="w-full flex flex-row  rounded-lg bg-gray-50">
    <div class="iftar w-4/12 px-8 py-10 text-center bg-blue-300 text-gray-700">
      <p class="font-bold text-4xl">
        Iftar Timings For Today :
      </p>
      <p class="text-5xl font-bold ">{{ checkDate.iftar }}</p>
    </div>
    <div class="sehr w-4/12 px-8 py-10 text-center text-gray-700">
      <p class="font-bold text-4xl">
        Current Time
      </p>
      <p class="text-5xl font-bold ">{{ currentTime }}</p>
    </div>
    <div class="sehr w-4/12 px-8 py-10 text-center bg-blue-300 text-gray-700">
      <p class="font-bold text-4xl">
        Sehr Timings For Today :
      </p>
      <p class="text-5xl font-bold ">{{ checkDate.sehr }}</p>
    </div>
  </div>

  <div class="calender-wrapper mt-4">
    <section class="calender">
      <h1
        class="text-4xl text-center tracking-tight font-extrabold text-gray-400 sm:text-5xl md:text-2xl"
      >
        Today: {{ this.date }}
      </h1>

      <h1
        class="text-4xl text-center tracking-tight font-extrabold text-gray-400 sm:text-5xl md:text-4xl"
      >
        Ramadan Calender {{ this.year }}
      </h1>
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div
        class="calender-card  mt-4 mx-auto max-w-screen-md bg-white rounded-lg shadow-2xl p-4"
      >
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div
                class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
              >
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Ramadan
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Iftar
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Sehr
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="c in calender" :key="c.day">
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {{ c.day }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {{ c.date }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {{ c.iftar }}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {{ c.sehr }}
                      </td>
                    </tr>

                    <!-- More people... -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import moment from "moment";
  export default {
    name: "ramadan",
    data() {
      return {
        date: new Date().toDateString(),
        year: new Date().getFullYear(),
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
          },
          {
            day: 30,
            date: "13-05-2021",
            sehr: "04:24 AM",
            iftar: "7:09 PM",
          },
        ],
        currentTime: null,
      };
    },
    methods: {
      clock() {
        // function getTime() {
        //   const time = moment().format("LTS");
        //   this.currentTime = time;
        //   return time;
        // }
        // const updateTime = setInterval(getTime, 1000);
        // var self = this;
        // this.currentTime = moment().format("LTS");
        // const updateTime = setInterval(self.time, 1000);
      },
    },
    computed: {
      today() {
        let today = moment().format("DD-MM-YYYY");
        return today;
      },
      checkDate() {
        let today = moment().format("DD-MM-YYYY");
        let filtered = this.calender.filter((x) => x.date === today);
        if (filtered) {
          console.log(filtered[0]);
          return filtered[0];
        } else {
          return null;
        }
        const checkDates = (element) => element.date === today;
        let index = this.calender.findIndex(checkDates);
      },
    },
    mounted: function() {
      this.checkDate;
      this.clock();
    },
  };
</script>

<style>
  .calender-wrapper {
    pointer-events: none;
    user-select: none;
  }
</style>
