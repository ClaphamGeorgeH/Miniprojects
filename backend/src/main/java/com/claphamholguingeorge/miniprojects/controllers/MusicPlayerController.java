package com.claphamholguingeorge.miniprojects.controllers;

import com.claphamholguingeorge.miniprojects.models.musicplayer.Song;
import com.claphamholguingeorge.miniprojects.repositories.musciplayer.SongRepository;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.LinkedList;


@RestController
@RequestMapping("api/musicplayer")
public class MusicPlayerController {


    private final SongRepository songRepository;
    public MusicPlayerController(SongRepository songRepository) {
        this.songRepository = songRepository;
    }


    @GetMapping("/")
    public void musicplayer( ) throws SQLException {
        LinkedList<Song> playlist = new LinkedList<>();
        playlist.addAll(songRepository.findAll());
        for ( Song song :playlist){

        }

    }

}
