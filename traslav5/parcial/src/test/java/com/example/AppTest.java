package com.example;

import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.*;

public class AppTest 
{
    WebDriver browser;
    @Before
    public void init(){
        System.setProperty("webdriver.chrome.driver", "C:/Users/elpad/Desktop/S6/Desarrollo Web/v2/PARCIAL/partialWebDevelopment/traslav5/parcial/src/test/resources/chromedriver.exe");
        browser=new ChromeDriver();
        browser.manage().window().maximize();
        browser.get("http://127.0.0.1:5500/traslav2/index.html");
    }

    @Test
    public void testAgregar() throws InterruptedException
    {
        try{
            Select opciones= new Select(browser.findElement(By.id("izquierda")));
            WebElement botonAdd=browser.findElement(By.id("addbtn"));Thread.sleep(500);
            Thread.sleep(500);
            opciones.selectByValue("carne");Thread.sleep(500);
            botonAdd.click();Thread.sleep(500);
            opciones.selectByValue("tomate");Thread.sleep(500);
            botonAdd.click();Thread.sleep(500);
            opciones.selectByValue("lechuga");Thread.sleep(500);
            botonAdd.click();
            browser.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
        }catch (Exception e){
            fail();
        }
    }

    @Test
    public void testRemover() throws InterruptedException {
        Select opciones= new Select(browser.findElement(By.id("derecha")));
        WebElement botonR=browser.findElement(By.id("revbtn"));Thread.sleep(500);
        try{
            Select op= new Select(browser.findElement(By.id("izquierda")));
            WebElement ba=browser.findElement(By.id("addbtn"));Thread.sleep(500);
            op.selectByValue("carne");Thread.sleep(500);
            Thread.sleep(500);
            op.selectByValue("tomate");Thread.sleep(500);
            Thread.sleep(500);
            op.selectByValue("lechuga");Thread.sleep(500);
            ba.click();
            //
            Thread.sleep(500);
            opciones.deselectAll();
            opciones.selectByVisibleText("Tomate");Thread.sleep(500);
            opciones.selectByVisibleText("Lechuga");Thread.sleep(500);
            botonR.click();
            browser.manage().timeouts().implicitlyWait(2, TimeUnit.MINUTES);
        }catch (Exception e){
            fail();
        }
        assertEquals(2,opciones.getOptions().size());
    }

}
