/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#4560","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\thalfEnemySpeed.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");for(const o of Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(e=>e.callbackContext?.toString().includes("invulnerableTime"))){var t=o.object2;let e=t.classType.prototype.start;t.classType.prototype.start=function(){e.apply(this,arguments),this.speed*=.5},t.children.entries.forEach(e=>e.speed*=.5)}})();