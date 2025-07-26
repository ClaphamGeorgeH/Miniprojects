package com.claphamholguingeorge.miniprojects.models.musicplayer;

import jakarta.persistence.*;

@Entity
public class Song {

    public Song() {
    }

    public Song(String name, Integer duration, String band, String fileLocation) {
        this.name = name;
        this.duration = duration;
        this.band = band;
        this.fileLocation = fileLocation;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private Integer duration;

    @Column
    private String band;

    @Column
    private String fileLocation;

    public String getFileLocation() { return fileLocation; }

    public void setFileLocation(String fileLocation) { this.fileLocation = fileLocation; }

    public String getBand() { return band; }

    public void setBand(String band) { this.band = band; }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }
}
