package com.claphamholguingeorge.miniprojects.models.musicplayer;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Band {


    public Band() {
    }

    public Band(String name, String imageLocation, List<Album> albums) {
        this.name = name;
        this.imageLocation = imageLocation;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column(name = "image_location")
    private String imageLocation;



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

    public String getImageLocation() {
        return imageLocation;
    }

    public void setImageLocation(String imageLocation) {
        this.imageLocation = imageLocation;
    }



}
