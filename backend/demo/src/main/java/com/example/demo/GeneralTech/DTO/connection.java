package com.example.demo.GeneralTech.DTO;

public class connection {

    private Long id;
    private boolean status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public boolean isStatus() {
        return status;
    }
    public void setStatus(boolean status) {
        this.status = status;
    }
    public connection(Long id, boolean isStatus) {
        this.id = id;
        this.status = isStatus;
    }
    public connection() {}
}
