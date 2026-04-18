---
title: AdGuard Home: Stop Ads & Trackers for Your Entire Family
description: How often have you encountered the scenario where you search something and suddenly everywhere you go, you start seeing ads for it. Or, when you try to read a news article and you can barely read anyt
date: 2026-03-12T13:47:00.103Z
author: Nishchay Kaushik
tags: Homelab, #selfhosted, SelfHosting, adguardhome, AdGuard, privacy, phishing, Security, ads, adblock, parental control 
---

# AdGuard Home: Stop Ads & Trackers for Your Entire Family

How often have you encountered the scenario where you search something and suddenly everywhere you go, you start seeing ads for it. Or, when you try to read a news article and you can barely read anything with all the ads showing up.

![example of a website filled with full page ads](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/4987fef2-f5b3-438f-9b46-b8947fa0629a.jpg align="center")

Although you might use apps like Firefox or extensions such as Adblock, they must be installed on every device, which is often impractical.

I faced a similar issue because my family, like many others, isn't tech-savvy. I needed a solution that could be implemented to shield them from ads and malware without requiring any changes on their part.

## Enter, AdGuardHome

[https://github.com/AdguardTeam/AdGuardHome](https://github.com/AdguardTeam/AdGuardHome) is a wonderful thing. I have found it extremely easy to Install, Manage and Configure.

In, this blog I would cover how you can also Install AdGuard.

<div data-node-type="callout">
<div data-node-type="callout-emoji">🤖</div>
<div data-node-type="callout-text">Let's assume we're working in a Linux environment, as it simplifies the installation and setup of such services. However, the steps are generally similar across all operating systems.</div>
</div>

* * *

## Installation

Head over to [https://github.com/AdguardTeam/AdGuardHome?tab=readme-ov-file#automated-install-linux-and-mac](https://github.com/AdguardTeam/AdGuardHome?tab=readme-ov-file#automated-install-linux-and-mac) and would notice the installation of AdGuard is a simple as running a command.

To install with `curl` run the following command:

```shell
curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v
```

To install with `wget` run the following command:

```shell
wget --no-verbose -O - https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v
```

This will install the AdGuard Service which would acts as your own DNS Server.

#### What is DNS?

DNS stands for Domain Name System, In very simple terms: You see it is like the internet's phone book, every website you visit actually has something known as IP Address, eg., 66.11.184.216, which as you can imagine is very hard to remember, so you add an entry into the phone-book which says when you look for [example.com](http://example.com) , It makes a call to 66.11.184.216.

DNS is essential because it allows us to use friendly names instead of numbers.

## Setting up AdGuard Home

> [https://adguard-dns.io/kb/adguard-home/getting-started/](https://adguard-dns.io/kb/adguard-home/getting-started/)

After installation, a web interface should start on port 3000, allowing you to configure AdGuard. Just open the URL http://localhost:3000 to set it up.

Step 1. Click `Get Started`

![AdGuard Home Get Started page](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/efb09ac6-5fa5-4243-a87f-77f4b38cb8ca.png align="center")

Step 2:

Here you can configure on which port AdGuard will run its UI for you to configure it after installation, by default it uses port 80, I highly recommend changing it.

Next, you'll have the option to change the port on which your DNS server runs after installation. By default, it uses port 53, and I recommend keeping it as is.

![AdGuard Home network port configuration page](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/f904e82c-ee5a-4942-8708-bb4fa55ae986.png align="center")

Step 3:

Setup your admin credentials to manage AdGuard

![AdGuard Home admin credentials setup](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/959d2d4b-3b21-4de0-9c2b-3b140d5d292b.png align="center")

continue through the steps to finish setting up.

After completing all the steps, you can access the admin interface at the port you configured in step 2.

When you arrive at the admin page, it may appear empty because you still need to configure your devices to use AdGuard.

![AdGuard Home DNS query dashboard overview](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/788668fe-820a-4e2d-bf0e-96baf916ea8b.png align="center")

You can add the filters by going to `Filters > DNS blocklists` from the top nav-bar.

Here's a list of all the block-lists I have enabled.

![AdGuard Home DNS blocklist settings](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/b9e31f20-770b-4df3-b1fc-809a33b7bc02.png align="center")

## Using AdGuard with your devices

The most optimal way to install AdGuard is to configure it at the Router level.

Head over to the `Setup Guide` page on your AdGuard admin interface and you can find the details and steps to set it up on different devices.

Before setting it up on your router, I recommend configuring it only on your system first. This ensures you won't lose internet access if something goes wrong, and make adjustments as needed..

Example for windows systems, you can follow these steps:

![Windows DNS settings for AdGuard Home](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/422bc309-52b6-4c93-b192-3b789bfd1137.png align="center")

Once, you have verified it on a single device, and you can see traffic flowing into your AdGuard instance i.e,. you see DNS Queries showing up on your AdGuard interface, You can go ahead and configure it at the router level.

In your router's admin panel, locate the DHCP settings and enter the IP address where your AdGuard is running in the DNS field. You can find this IP on the Setup Guide page; it will resemble something like 192.168.xx.xxx.

![TP-Link Router DHCP DNS settings example](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/0e9b58ac-20ca-4aa1-9700-f72393fc36f4.jpg align="center")

Once you've configured it at the router level, all devices connected to your home network will have AdGuard enabled.

## Bonus

In addition to blocking ads and trackers, AdGuard offers the added benefit of enabling content blocking across your entire home network.

![Adguard Home block services eg., youtube, tiktok](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/e7c66db1-d427-4d1e-88ce-cd18f8cd83af.png align="center")

It offers an easy-to-use method to block services you want to restrict, such as adult content and gambling.

![Adguard home schedule service blocking](https://cdn.hashnode.com/uploads/covers/6984dc9e559eb2d777b15a66/c391abda-b4b7-48fc-b9f5-10ba2445499e.png align="center")

You can take it a step further by blocking services for specific time periods. For example, you can restrict access to YouTube for your kids outside designated hours, ensuring effective parental control.

## Conclusion

AdGuard Home gives you a simple, network-wide way to reclaim privacy, reduce intrusive ads, and add a layer of protection against malicious domains — all without installing browser extensions on every device. Once installed on a small always-on machine (Raspberry Pi, home server, or VPS), it works silently for every device that uses your network DNS, making it ideal for non-technical family members.

To finish your setup: point devices or your router to AdGuard Home as the DNS, enable the appropriate blocklists and filters, whitelist sites you trust, and secure the web UI with a strong password (or VPN). Regularly update filter lists and back up your configuration. Monitor logs briefly after deployment to catch any false positives and adjust rules as needed.

AdGuard Home is low-maintenance but powerful — a practical step toward a cleaner, safer browsing experience for everyone on your network.
