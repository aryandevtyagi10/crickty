package com.example.cricket.controller;

import com.example.cricket.model.Player;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@Controller
public class PlayerController {

    @GetMapping("/players")
    public String getPlayers(Model model) {
        List<Player> players = Arrays.asList(
            new Player("Virat Kohli", "Batsman", 274, 12898),
            new Player("Jasprit Bumrah", "Bowler", 125, 0),
            new Player("MS Dhoni", "Wicketkeeper", 350, 10773)
        );
        model.addAttribute("players", players);
        return "players";
    }
}