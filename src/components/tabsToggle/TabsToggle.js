import { tabsToggleInfo } from "./tabsToggle-info";
import toggleIcon from "../../assets/images/event-badging/icons/toggle-icon.png";
import "./tabsToggle.css";


export default function TabsToggle() {
	const renderTabSections = (sections) => {
		if (sections) {
			return (
				<div className="tabs-toggle-sections">
					{sections.map((section, index) => {
						return (
							<div className="tabs-toggle-section" key={`section-${index}`}>
								<h4>{section.title}</h4>
								{typeof section.body === "string" ? (
										<p>{section.body}</p> 
									) : (
										<>
											{section.body.map(item => {
												return (
													<>
														<h5>{item.ul}</h5>
														<ul>
															{item.li.map(listItem => {
																return (<li>{listItem}</li>);
															})}
														</ul>
													</>
												);
											})}
										</>
									)
								}
						</div>)
					})}
				</div>)
		}
	}


	return (
		<div className="tabs-toggle">
			{tabsToggleInfo.map((item, index) => {
				return (
					<>
						<div className="tabs-toggle-header"key={index}>
							<h3>{item.title}</h3>
							<img src={toggleIcon} alt="Toggle Icon"/>
						</div>
						{renderTabSections(item.sections)}
						
					</>
					);
			})}
		</div>);
} 