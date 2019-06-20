<template>
  <main>
    <table role="table">
      <thead role="rowgroup">
        <tr role="row">
          <th role="columnheader">ФИО</th>
          <th role="columnheader">Формат</th>
          <th role="columnheader">Гости</th>
          <th role="columnheader">Бюджет</th>
          <th role="columnheader">Почта</th>
          <th role="columnheader">Телефон</th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        <tr
          role="row"
          v-for="request in requests"
          :key="request.id"
          :id="request.id"
          :is-admin="isAdmin"
          :fullName="request.fullName"
          :eventType="request.eventType"
          :guestCount="request.guestCount"
          :eventBudget="request.eventBudget"
          :emailAddress="request.emailAddress"
          :phoneNumber="request.phoneNumber"
        >
          <td style="text-align: left;">{{request.fullName}}</td>
          <td>{{request.eventType}}</td>
          <td>{{request.guestCount}}</td>
          <td>{{Number(request.eventBudget).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</td>
          <td>
            <a target="_blank" :href="'mailto:' + request.emailAddress">{{request.emailAddress}}</a>
          </td>
          <td>
            <a :href="'tel:' + request.phoneNumber">{{request.phoneNumber}}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: true
    },
    requests: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;

  margin-top: 20px;
}

th,
td {
  text-align: center;
  padding: 0 10px;
}

td {
  font-family: "FuturaRegular";
}
thead tr {
  background: #dedede;
  height: 40px;
  font-family: "FuturaMedium";
}

a {
  color: blue;
}

tr:nth-child(even) {
  background: #ededed;
}

@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
    text-align: left;
  }
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    margin: 0 0 1rem 0;
  }

  tr:nth-child(odd) {
    background: #ccc;
  }

  td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    position: absolute;
    top: 0;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }

  td:nth-of-type(1):before {
    content: "ФИО";
  }
  td:nth-of-type(2):before {
    content: "Формат";
  }
  td:nth-of-type(3):before {
    content: "Гости";
  }
  td:nth-of-type(4):before {
    content: "Бюджет";
  }
  td:nth-of-type(5):before {
    content: "Почта";
  }
  td:nth-of-type(6):before {
    content: "Телефон";
  }
}
</style>