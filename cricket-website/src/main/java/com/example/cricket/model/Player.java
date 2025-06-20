package com.example.cricket.model;

public class Player {
    private String name;
    private String role;
    private int matches;
    private int runs;

    public Player(String name, String role, int matches, int runs) {
        this.name = name;
        this.role = role;
        this.matches = matches;
        this.runs = runs;
    }

    public String getName() { return name; }
    public String getRole() { return role; }
    public int getMatches() { return matches; }
    public int getRuns() { return runs; }
}