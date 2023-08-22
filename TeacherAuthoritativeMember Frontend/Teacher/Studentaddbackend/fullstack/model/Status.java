<<<<<<< Updated upstream
package com.studentadd.fullstack.model;

import jakarta.persistence.*;

@Entity
public class Status {
    @Id
    private Long id;
    private int days_present;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    private User user;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getDays_present() {
        return days_present;
    }

    public void setDays_present(int days_present) {
        this.days_present = days_present;
    }

    public int getPercentage() {
        return percentage;
    }

    public void setPercentage(int percentage) {
        this.percentage = percentage;
    }

    private int percentage;
}
=======
package com.studentadd.fullstack.model;

import jakarta.persistence.*;

@Entity
public class Status {
    @Id
    private Long id;
    private int days_present;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    private User user;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getDays_present() {
        return days_present;
    }

    public void setDays_present(int days_present) {
        this.days_present = days_present;
    }

    public int getPercentage() {
        return percentage;
    }

    public void setPercentage(int percentage) {
        this.percentage = percentage;
    }

    private int percentage;
}
>>>>>>> Stashed changes
