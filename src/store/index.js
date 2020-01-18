import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imageLink: undefined,
    survey: [],
    teamA: ["Alice", "Bobby"],
    teamB: ["Charlie", "Delta"],
    pointsTeamA: 6,
    pointsTeamB: 6,
    roundInfo: {
      isFirstTurn: true,
      control: "A",
      currentPlayer: null,
      points: 0
    }
  },
  mutations: {
    updateSurvey(state, payload) {
      state.survey = payload;
    },
    updatePointsTeamA(state, points) {
      state.pointsTeamA = points;
    },
    updatePointsTeamB(state, points) {
      state.pointsTeamB = points;
    },
    addMemberTeamA(state, player) {
      state.teamA.push(player);
    },
    addMemberTeamB(state, player) {
      state.teamB.push(player);
    },
    addToRoundPoints(state, points) {
      state.points += points;
    }
  },
  actions: {},
  modules: {}
});
