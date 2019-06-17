<template>
  <section class="request-list">
    <div class="request-content">
      <table class="request-table">
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Формат</th>
            <th>Гости</th>
            <th>Бюджет</th>
            <th>Почта</th>
            <th>Телефон</th>
          </tr>
        </thead>
        <tbody>
          <tr
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
            <td>{{request.fullName}}</td>
            <td>{{request.eventType}}</td>
            <td>{{request.guestCount}}</td>
            <td>{{request.eventBudget}}</td>
            <td>
              <a target="_blank" :href="'mailto:' + request.emailAddress">{{request.emailAddress}}</a>
            </td>
            <td>
              <a :href="'tel:' + request.emailAddress">{{request.phoneNumber}}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
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
.request-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

a {
  color: blue;
}

table.request-table {
  border: 1px solid #c9c9c9;
  background-color: #eeeeee;
  width: 100%;
  text-align: left;
}
table.request-table td,
table.request-table th {
  border: 1px solid #aaaaaa;
  padding: 5px 5px;
}
table.request-table tbody td {
  font-size: 12px;
}
table.request-table thead {
  background: #6b6565;
  background: -moz-linear-gradient(top, #908b8b 0%, #797474 66%, #6b6565 100%);
  background: -webkit-linear-gradient(
    top,
    #908b8b 0%,
    #797474 66%,
    #6b6565 100%
  );
  background: linear-gradient(to bottom, #908b8b 0%, #797474 66%, #6b6565 100%);
}
table.request-table thead th {
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  border-left: 2px solid #aaaaaa;
}
table.request-table thead th:first-child {
  border-left: none;
}

table.request-table tfoot td {
  font-size: 14px;
}
table.request-table tfoot .links {
  text-align: right;
}
table.request-table tfoot .links a {
  display: inline-block;
  background: #1c6ea4;
  color: #ffffff;
  padding: 2px 8px;
  border-radius: 5px;
}

@media (min-width: 850px) {
  .request-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-request-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-request-content,
a:active .post-request-content {
  background-color: #ccc;
}
</style>

