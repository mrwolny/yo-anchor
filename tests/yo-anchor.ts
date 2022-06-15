import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { YoAnchor } from "../target/types/yo_anchor";

describe("yo-anchor", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.YoAnchor as Program<YoAnchor>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
