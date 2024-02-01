const { createApp } = Vue;
createApp({
  created() {},
  data() {
    return {
      currentChat: 0,
      searchChat: "",

      casualAnswers: [
        "Sì, certo!",
        "No, purtroppo",
        "Forse, vediamo",
        "Assolutamente!",
        "Non ne sono sicuro",
        "Chiaro!",
        "Mmm, boh...",
        "Oh, assolutamente no!",
        "Beh, dipende",
        "Ma certo!",
        "Come stai oggi?",
        " al momento no",
        "ti rende più felice?",
        "C'è qualcosa di nuovo?",
        "Qual è il tuo sogno nel cassetto?",
      ],
      newMsg: {
        date: "",
        message: "",
        status: "sent",
      },
      newAnswer: {
        date: "",
        message: "",
        status: "received",
      },
      me: {
        name: "Agnes",
        avatar: "./img/avatar_io.jpg",
      },
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
      contactsSearch: [],
    };
  },

  methods: {
    emptyArr() {
      this.contactsSearch = [];
    },

    searchInChats() {
      this.searchChat = this.searchChat.toLowerCase();

      this.contacts.forEach((item) => {
        if (item.name.toLowerCase().includes(this.searchChat)) {
          this.contactsSearch.push(item);
        }
      });

      return this.contactsSearch;
    },

    openChat(idx) {
      if (this.searchChat === "") {
        this.currentChat = idx;
      } else {
        this.contacts.forEach((elem, index) => {
          elem.name === this.contactsSearch[idx].name
            ? (this.currentChat = index)
            : 0;
        });
        this.searchChat = "";
      }
    },
    sendNewMsg(current) {
      const msg = { ...this.newMsg };

      let now = new Date();
      let created = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

      msg.date = created;

      if (msg.message !== "") {
        current.messages.push(msg);
      }

      this.newMsg.message = "";

      setTimeout(() => {
        this.sendNewResponse(current);
      }, 5000);
    },

    sendNewResponse(current) {
      const answer = { ...this.newAnswer };
      let now = new Date();
      let created = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      answer.date = created;
      let num = Math.floor(Math.random() * 14);

      answer.message = this.casualAnswers[num];
      current.messages.push(answer);
    },
    addTimeChat(param) {
      let myDate = new Date(param);

      let dateDisplay = `${myDate.getHours()}:${myDate.getMinutes()}`;
      return dateDisplay;
    },
  },
}).mount("#app");
