import tkinter as tk
from tkinter import messagebox
import random

class RPGGame:
    def __init__(self, master):
        self.master = master
        self.master.title("Simple RPG Game")

        # Player attributes
        self.player_health = 100
        self.player_attack = 10
        self.player_defense = 5

        # Monster attributes
        self.monsters = [
            {"name": "Goblin", "health": 20, "attack": 5, "defense": 2},
            {"name": "Skeleton", "health": 30, "attack": 8, "defense": 3},
            {"name": "Dragon", "health": 50, "attack": 15, "defense": 5}
        ]

        # Weapons
        self.weapons = [
            {"name": "Sword", "attack_bonus": 5},
            {"name": "Shield", "defense_bonus": 3}
        ]

        # Current level
        self.current_level = 0

        # GUI elements
        self.label_health = tk.Label(master, text=f"Health: {self.player_health}")
        self.label_attack = tk.Label(master, text=f"Attack: {self.player_attack}")
        self.label_defense = tk.Label(master, text=f"Defense: {self.player_defense}")
        self.label_health.grid(row=0, column=0, sticky="w")
        self.label_attack.grid(row=1, column=0, sticky="w")
        self.label_defense.grid(row=2, column=0, sticky="w")

        self.btn_fight = tk.Button(master, text="Fight", command=self.fight)
        self.btn_fight.grid(row=3, column=0, pady=10)

        self.btn_next_level = tk.Button(master, text="Next Level", command=self.next_level, state=tk.DISABLED)
        self.btn_next_level.grid(row=4, column=0)

    def fight(self):
        monster = self.monsters[self.current_level]
        monster_health = monster["health"]
        monster_attack = monster["attack"]
        monster_defense = monster["defense"]

        player_damage = max(0, self.player_attack - monster_defense)
        monster_damage = max(0, monster_attack - self.player_defense)

        while self.player_health > 0 and monster_health > 0:
            monster_health -= player_damage
            if monster_health <= 0:
                messagebox.showinfo("Victory", f"You defeated the {monster['name']}!")
                self.btn_next_level.config(state=tk.NORMAL)
                break

            self.player_health -= monster_damage
            if self.player_health <= 0:
                messagebox.showinfo("Defeat", "You were defeated!")
                break

        self.update_ui()

    def next_level(self):
        self.current_level += 1
        if self.current_level >= len(self.monsters):
            messagebox.showinfo("Game Over", "Congratulations! You have completed all levels.")
            self.master.destroy()
        else:
            messagebox.showinfo("Next Level", f"Welcome to Level {self.current_level + 1}.")
            self.btn_next_level.config(state=tk.DISABLED)
            self.update_ui()

    def update_ui(self):
        self.label_health.config(text=f"Health: {self.player_health}")
        self.label_attack.config(text=f"Attack: {self.player_attack}")
        self.label_defense.config(text=f"Defense: {self.player_defense}")

def main():
    root = tk.Tk()
    game = RPGGame(root)
    root.mainloop()

if __name__ == "__main__":
    main()