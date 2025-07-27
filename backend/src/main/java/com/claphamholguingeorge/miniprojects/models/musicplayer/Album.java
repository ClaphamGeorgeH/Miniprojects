package com.claphamholguingeorge.miniprojects.models.musicplayer;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
public class Album {

    public Album() {
    }

    public Album(String name, Band band, Date realizeDate, String imageLocation) {
        this.name = name;
        this.band = band;
        this.realizeDate = realizeDate;
        this.imageLocation = imageLocation;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @OneToOne
    @JoinColumn(name = "band_id")
    private Band band;

    @Column(name = "realize_date")
    private Date realizeDate;

    @Column(name = "image_location")
    private String imageLocation;


    public String getImageLocation() { return imageLocation; }

    public void setImageLocation(String imageLocation) { this.imageLocation = imageLocation; }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() { return name; }

    public void setName(String name) {
        this.name = name;
    }

    public Band getBand() {
        return band;
    }

    public void setBand(Band band) {
        this.band = band;
    }

    public Date getRealizeDate() {
        return realizeDate;
    }

    public void setRealizeDate(Date realizeDate) {
        this.realizeDate = realizeDate;
    }



}
