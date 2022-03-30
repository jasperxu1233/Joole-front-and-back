package com.itlize.joole.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.engine.internal.Cascade;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Entity
@Table(name = "products")
@EntityListeners(AuditingEntityListener.class)
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "product_id")
    private Long id;

    private String manufacturer;
    private String series;
    private String model;
    private String useType;
    private String application;
    private String mountingLocation;
    private String accessories;
    private int modelYear;
    private double airflow;
    private double powerMax;
    private double powerMin;
    private double operatingVoltageMax;
    private double operatingVoltageMin;
    private double fanSpeedMax;
    private double fanSpeedMin;
    private double numberOfFanSpeeds;
    private double soundAtMaxSpeed;
    private double fanSweepDiameter;
    private double heightMin;
    private double heightMax;
    private double weight;


//    @ElementCollection
//    private List<String> productDetails;
//
//    @ElementCollection
//    private List<String> productDocumentation;  // add the link of the file as string here
//
//    @ElementCollection
//    private Map<String, String> contact; //store as key-value pair

    @JsonIgnore
    @OneToMany(targetEntity = ProjectProduct.class,
            cascade = CascadeType.REMOVE,
            fetch = FetchType.LAZY
//            , mappedBy = "products"
    )
    private List<ProjectProduct> projectProductList;

    @CreatedDate
    @Column(name = "product_created_date")
    private Date createdTime;

    @LastModifiedDate
    @Column(name = "product_modified_date")
    private Date lastModifiedTime;

    public Product() {
    }

    public Product(Long id, String manufacturer, String series, String model,
                   String useType, String application, String mountingLocation,
                   String accessories, int modelYear, double airflow,
                   double powerMax, double powerMin, double operatingVoltageMax,
                   double operatingVoltageMin, double fanSpeedMax, double fanSpeedMin,
                   double numberOfFanSpeeds, double soundAtMaxSpeed, double fanSweepDiameter,
                   double heightMin, double heightMax, double weight) {
        this.id = id;
        this.manufacturer = manufacturer;
        this.series = series;
        this.model = model;
        this.useType = useType;
        this.application = application;
        this.mountingLocation = mountingLocation;
        this.accessories = accessories;
        this.modelYear = modelYear;
        this.airflow = airflow;
        this.powerMax = powerMax;
        this.powerMin = powerMin;
        this.operatingVoltageMax = operatingVoltageMax;
        this.operatingVoltageMin = operatingVoltageMin;
        this.fanSpeedMax = fanSpeedMax;
        this.fanSpeedMin = fanSpeedMin;
        this.numberOfFanSpeeds = numberOfFanSpeeds;
        this.soundAtMaxSpeed = soundAtMaxSpeed;
        this.fanSweepDiameter = fanSweepDiameter;
        this.heightMin = heightMin;
        this.heightMax = heightMax;
        this.weight = weight;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getSeries() {
        return series;
    }

    public void setSeries(String series) {
        this.series = series;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getUseType() {
        return useType;
    }

    public void setUseType(String useType) {
        this.useType = useType;
    }

    public String getApplication() {
        return application;
    }

    public void setApplication(String application) {
        this.application = application;
    }

    public String getMountingLocation() {
        return mountingLocation;
    }

    public void setMountingLocation(String mountingLocation) {
        this.mountingLocation = mountingLocation;
    }

    public String getAccessories() {
        return accessories;
    }

    public void setAccessories(String accessories) {
        this.accessories = accessories;
    }

    public int getModelYear() {
        return modelYear;
    }

    public void setModelYear(int modelYear) {
        this.modelYear = modelYear;
    }

    public double getAirflow() {
        return airflow;
    }

    public void setAirflow(double airflow) {
        this.airflow = airflow;
    }

    public double getPowerMax() {
        return powerMax;
    }

    public void setPowerMax(double powerMax) {
        this.powerMax = powerMax;
    }

    public double getPowerMin() {
        return powerMin;
    }

    public void setPowerMin(double powerMin) {
        this.powerMin = powerMin;
    }

    public double getOperatingVoltageMax() {
        return operatingVoltageMax;
    }

    public void setOperatingVoltageMax(double operatingVoltageMax) {
        this.operatingVoltageMax = operatingVoltageMax;
    }

    public double getOperatingVoltageMin() {
        return operatingVoltageMin;
    }

    public void setOperatingVoltageMin(double operatingVoltageMin) {
        this.operatingVoltageMin = operatingVoltageMin;
    }

    public double getFanSpeedMax() {
        return fanSpeedMax;
    }

    public void setFanSpeedMax(double fanSpeedMax) {
        this.fanSpeedMax = fanSpeedMax;
    }

    public double getFanSpeedMin() {
        return fanSpeedMin;
    }

    public void setFanSpeedMin(double fanSpeedMin) {
        this.fanSpeedMin = fanSpeedMin;
    }

    public double getNumberOfFanSpeeds() {
        return numberOfFanSpeeds;
    }

    public void setNumberOfFanSpeeds(double numberOfFanSpeeds) {
        this.numberOfFanSpeeds = numberOfFanSpeeds;
    }

    public double getSoundAtMaxSpeed() {
        return soundAtMaxSpeed;
    }

    public void setSoundAtMaxSpeed(double soundAtMaxSpeed) {
        this.soundAtMaxSpeed = soundAtMaxSpeed;
    }

    public double getFanSweepDiameter() {
        return fanSweepDiameter;
    }

    public void setFanSweepDiameter(double fanSweepDiameter) {
        this.fanSweepDiameter = fanSweepDiameter;
    }

    public double getHeightMin() {
        return heightMin;
    }

    public void setHeightMin(double heightMin) {
        this.heightMin = heightMin;
    }

    public double getHeightMax() {
        return heightMax;
    }

    public void setHeightMax(double heightMax) {
        this.heightMax = heightMax;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

//    public List<String> getProductDetails() {
//        return productDetails;
//    }
//
//    public void setProductDetails(List<String> productDetails) {
//        this.productDetails = productDetails;
//    }
//
//    public List<String> getProductDocumentation() {
//        return productDocumentation;
//    }
//
//    public void setProductDocumentation(List<String> productDocumentation) {
//        this.productDocumentation = productDocumentation;
//    }
//
//    public Map<String, String> getContact() {
//        return contact;
//    }
//
//    public void setContact(Map<String, String> contact) {
//        this.contact = contact;
//    }

    public List<ProjectProduct> getProjectProductList() {
        return projectProductList;
    }

    public void setProjectProductList(List<ProjectProduct> projectProductList) {
        this.projectProductList = projectProductList;
    }

    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    public Date getLastModifiedTime() {
        return lastModifiedTime;
    }

    public void setLastModifiedTime(Date lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", manufacturer='" + manufacturer + '\'' +
                ", series='" + series + '\'' +
                ", model='" + model + '\'' +
                ", useType='" + useType + '\'' +
                ", application='" + application + '\'' +
                ", mountingLocation='" + mountingLocation + '\'' +
                ", accessories='" + accessories + '\'' +
                ", modelYear=" + modelYear +
                ", airflow=" + airflow +
                ", powerMax=" + powerMax +
                ", powerMin=" + powerMin +
                ", operatingVoltageMax=" + operatingVoltageMax +
                ", operatingVoltageMin=" + operatingVoltageMin +
                ", fanSpeedMax=" + fanSpeedMax +
                ", fanSpeedMin=" + fanSpeedMin +
                ", numberOfFanSpeeds=" + numberOfFanSpeeds +
                ", soundAtMaxSpeed=" + soundAtMaxSpeed +
                ", fanSweepDiameter=" + fanSweepDiameter +
                ", heightMin=" + heightMin +
                ", heightMax=" + heightMax +
                ", weight=" + weight +
                ", createdTime=" + createdTime +
                ", lastModifiedTime=" + lastModifiedTime +
                '}';
    }
}
