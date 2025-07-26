package com.claphamholguingeorge.miniprojects.models.musicplayer;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Album {

    public Album() {
    }

    public Album(String name, String band, int songsAmount, Date realizeDate) {
        this.name = name;
        this.band = band;
        this.songsAmount = songsAmount;
        this.realizeDate = realizeDate;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String band;

    @Column
    private int songsAmount;

    @Column
    private Date realizeDate;

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

    public String getBand() {
        return band;
    }

    public void setBand(String band) {
        this.band = band;
    }

    public int getSongsAmount() {
        return songsAmount;
    }

    public void setSongsAmount(int songsAmount) {
        this.songsAmount = songsAmount;
    }

    public Date getRealizeDate() {
        return realizeDate;
    }

    public void setRealizeDate(Date realizeDate) {
        this.realizeDate = realizeDate;
    }



}
