import { VoteComponent } from "./vote.component";

describe("VoteComponent", () => {
  let component: VoteComponent;

  // Crée un nouveau composant avant chaque test pour éviter les side effects.
  beforeEach(() => {
    component = new VoteComponent();
  });

  it("should increment totalVotes when upvoted", () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it("should decrement totalVotes when downvoted", () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
