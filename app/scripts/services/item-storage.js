'use strict';

app.service('itemStorage', [function(){
		var items = [
									{
										title: "Item",
										price: 1000,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore in dolorum placeat non quas, fuga voluptate nulla voluptas, accusantium porro, quod quibusdam dignissimos cupiditate fugit inventore ullam, neque tempore. Illo."
									},
									{
										title: "Item",
										price: 3400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore in dolorum placeat non quas, fuga voluptate nulla voluptas, accusantium porro, quod quibusdam."
									},
									{
										title: "Item",
										price: 7692,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 3400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident asperiores mollitia excepturi voluptatibus sequi, nostrum."
									},
									{
										title: "Item",
										price: 3455.34,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1000,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2222.10,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni tempora, aliquid corporis, iure, voluptates perferendis magnam error pariatur repudiandae provident officia. Veritatis, optio"
									},
									{
										title: "Item",
										price: 10000.12,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta sint consectetur, necessitatibus magni enim dolore accusantium assumenda repellendus aliquid quam possimus corrupti atque laudantium ipsum ratione, asperiores!"
									},
									{
										title: "Item",
										price: 4002.13,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta sint consectetur, necessitatibus magni enim dolore accusantium assumenda repellendus aliquid quam possimus corrupti atque laudantium ipsum ratione, asperiores!"
									},
									{
										title: "Item",
										price: 1540,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta sint consectetur, necessitatibus magni enim dolore accusantium assumenda repellendus aliquid quam possimus corrupti atque laudantium ipsum ratione, asperiores!"
									},
									{
										title: "Item",
										price: 1890,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1785.87,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 8235,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1333,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2099.99,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 3400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2700.59,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1499.99,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1001.90,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1333,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2099.99,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 3400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2700.59,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1333,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2099.99,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 3400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2700.59,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1333,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2099.99,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 3400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2700.59,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1333,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2099.99,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 3400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2700.59,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1333,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2099.99,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 3400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2700.59,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1333,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2099.99,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 3400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2700.59,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1333,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2099.99,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 3400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2700.59,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1333,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2099.99,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 3400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 2700.59,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									},
									{
										title: "Item",
										price: 1400,
										status: false,
										desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui placeat, dolores cumque molestias voluptatum, commodi maxime laboriosam aperiam officiis distinctio atque harum quibusdam illo magnam sunt excepturi odit modi dolorem culpa veniam perferendis at quos. Ex sed tenetur quas incidunt est ratione veniam. Facere aliquam, reiciendis ullam saepe delectus, doloribus."
									}
								];

	return {
		setItems: function (item) {
				items = item;
		},
		getItems: function () {
				return items;
		}
	};

}]);