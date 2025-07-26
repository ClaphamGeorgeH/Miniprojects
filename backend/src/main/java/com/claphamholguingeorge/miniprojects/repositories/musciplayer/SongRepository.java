package com.claphamholguingeorge.miniprojects.repositories.musciplayer;

import com.claphamholguingeorge.miniprojects.models.musicplayer.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SongRepository  extends JpaRepository<Song, Long> {
}
